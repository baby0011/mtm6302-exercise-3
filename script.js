const $fullName = document.getElementById('fullname')
const $lastDate =document.querySelector('.last-date')
const $alert =document.querySelector('.alert')
const $Status=document.getElementById('Status')
const $quali=document.getElementById('quali')
const $jobForm=document.getElementById('job-form')

const values = []

$jobForm.addEventListener('click', function(e){

    if(e.target.classList.contains('save')){
        e.preventDefault()

        values.push({
            fullName:$jobForm.elements.fullname.value,
            quali:$jobForm.elements.quali.value,
            status:$jobForm.elements.Status.value,
        })
        
        const savedTime = new Date()
        const msdate=savedTime.getTime()
        $lastDate.textContent=`Recently saved on: ${savedTime.toLocaleString('en-CA')}`
        
        
        localStorage.setItem('msdate', msdate)
        localStorage.setItem('values', JSON.stringify(values))
        

    }
})
const jobValues = localStorage.getItem('values')
const datems =  localStorage.getItem('msdate')

if (datems){
    const numberDate =JSON.parse(datems)
    const recentDate = new Date(numberDate)
    $lastDate.textContent=`Recently saved on: ${recentDate.toLocaleString('en-CA')}`
}
if (jobValues) {
    const savedvalues = JSON.parse(jobValues)
    $jobForm.elements.fullname.value = savedvalues[0].fullName
    $jobForm.elements.quali.value = savedvalues[0].quali
    $jobForm.elements.Status.value=savedvalues[0].status
}

$jobForm.addEventListener('submit',function(e){
    e.preventDefault()
    $lastDate.textContent=''

    localStorage.clear()
    $jobForm.reset()
    
    $alert.classList.add('appear')
})
function closeAlert(){
    $alert.classList.remove('appear')
}
$alert.addEventListener('click',closeAlert)
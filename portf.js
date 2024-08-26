
function animateCountUp(targetElement, startValue, endValue, duration) {
    let current = startValue;
    const totalFrames = duration * 60; 
    const increment = (endValue - startValue) / totalFrames; 
    let frame = 0; 

 
    function animationStep() {
        current += increment;
        targetElement.textContent = Math.ceil(current) + "+";
        frame++;

    
        if (frame < totalFrames) {
        
            requestAnimationFrame(animationStep);
        } else {
            
            current = startValue;
            frame = 0;
        }
    }


    animationStep();
}


function startCountUpAnimations() {
 
    const enrolledStudentsElement = document.getElementById('enrolled_students');
    animateCountUp(enrolledStudentsElement, 0, 154, 4); 

    const totalCoursesElement = document.getElementById('total_courses');
    animateCountUp(totalCoursesElement, 0, 62, 4); 

    const placedStudentsElement = document.getElementById('placed_students');
    animateCountUp(placedStudentsElement, 0, 56, 4); 

    const totalProjectsElement = document.getElementById('total_projects');
    animateCountUp(totalProjectsElement, 0, 27, 4); 
    
window.addEventListener('scroll', startCountUpAnimations);

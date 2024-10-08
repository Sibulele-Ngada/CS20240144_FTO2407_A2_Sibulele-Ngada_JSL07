document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName'); 
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input
  
      // 🚨 Generate certificate content dynamically
      certificateContent.innerHTML = `
        <h2>Certificate of Achievement</h2>
        <p>This is to certify that</p>
        <h3>${studentName}</h3>
        <p>has almost completed the</p>
        <h4>${courseName} Course</h4>
        <p>with legendary perseverance and world-class bad-assery for never giving up 🏆</p>
        <img src="./logo.png" alt="Seal" w>
        <p>${personalMessage}</p>
      `;
    
      //  Display the modal
      modal.style.display = 'block';
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });
  
    //  🚨 Close the modal when the close button is clicked
    closeModal.onclick = () => modal.style.display = 'none';
  });
  
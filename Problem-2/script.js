

document.addEventListener('DOMContentLoaded', function() {
    const teamMembers = document.querySelectorAll('.member');
    const modal = document.getElementById('member-modal');
    const modalName = document.getElementById('modal-name');
    const modalRole = document.getElementById('modal-role');
    const modalDescription = document.getElementById('modal-description');
    const closeBtn = document.querySelector('.close');
  
    teamMembers.forEach(member => {
      member.addEventListener('click', function() {
        const name = this.dataset.name;
        const role = this.dataset.role;
        const description = this.dataset.description;
  
        modalName.textContent = name;
        modalRole.textContent = role;
        modalDescription.textContent = description;
  
        modal.style.display = "block";
      });
    });
  
    closeBtn.addEventListener('click', function() {
      modal.style.display = "none";
    });
  
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });
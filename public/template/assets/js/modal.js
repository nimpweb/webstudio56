const Modal = (body, onSubmit) => {

  const overlayNode = document.createElement('div');
  overlayNode.classList.add('modal');
  const modalContent = document.createElement('div');
  modalContent.classList.add('modalContent');
  overlayNode.appendChild(modalContent);
  const modalHeader = document.createElement('div');
  modalHeader.classList.add('modalHeader');
  modalContent.appendChild(modalHeader);
  
  const content = `
    <div class="modal">
    <div class="modalContent">
      <div class="modalHeader">
        <h3>Зголовок</h3>  
        <span class="modalHeaderClose">&times;</span>
      </div>
      <div class="modalBody">
        <h3 class="titleValue"></h3>
        <form onSubmit=>
          ${body}
        </form>
      </div>
    </div>
  </div>  
  `;

  document.querySelector('body').insertAdjacentHTML('beforeend', content);
}

document.addEventListener('DOMContentLoaded', modalReady)

function modalReady() {
  const modalHeadersClose = document.querySelectorAll('.modalHeaderClose');
  if (modalHeadersClose) {
    modalHeadersClose.forEach(modal => {
      modal.addEventListener('click', e => {
        e.target.closest('.modal').classList.remove('active')
      })
    })
  }

  const headerMenuButton = document.querySelector('.headerMenuButton');
  if (headerMenuButton) {
    headerMenuButton.addEventListener('click', () => {
      const modal = document.querySelector('.modal');
      modal.classList.add('active')
    })
  }

  const orderButtons = document.querySelectorAll('.button-order');
  if (orderButtons) {
    orderButtons.forEach(button => button.addEventListener('click', event => {
      const title = event.target.dataset.title ?? 'LANDING PAGE';
      const modal = document.querySelector('.modal');
      modal.classList.add('active');
      modal.querySelector('.titleValue').innerText = title;
    }))
  }
}
function openModal(options){
    const backdrop = document.getElementById('customModalBackdrop');
    const titleEl = document.getElementById('customModalTitle');
    const messageEl = document.getElementById('customModalMessage');
    const confirmBtn = document.getElementById('customModalConfirm');
    const cancelBtn = document.getElementById('customModalCancel');

    titleEl.innerText = options.title || 'Konfirmasi';
    messageEl.innerText = options.message || '';
    confirmBtn.innerText = options.confirmText || 'Ya';
    cancelBtn.innerText = options.cancelText || 'Batal';

    function cleanup(){
        backdrop.classList.remove('open');
        confirmBtn.onclick = null;
        cancelBtn.onclick = null;
    }

    confirmBtn.onclick = function(){
        cleanup();
        if(typeof options.onConfirm === 'function') options.onConfirm();
    }

    cancelBtn.onclick = function(){
        cleanup();
        if(typeof options.onCancel === 'function') options.onCancel();
    }

    backdrop.classList.add('open');
}

function confirmDecline(form, e){
    e.preventDefault();
    openModal({
        title: 'Tolak Akun',
        message: 'Yakin ingin menolak akun ini? Tindakan ini tidak bisa dibatalkan.',
        confirmText: 'Tolak',
        cancelText: 'Batal',
        onConfirm: function(){ form.submit(); }
    });
    return false;
}

document.addEventListener('click', function(ev){
    // close modal when clicking on backdrop (outside modal)
    const backdrop = document.getElementById('customModalBackdrop');
    if(!backdrop) return;
    if(ev.target === backdrop){
        backdrop.classList.remove('open');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.getElementById('sidebar');
    var container = document.querySelector('.container');
    var sidebarVisible = false; // Флаг видимости боковой панели

    document.addEventListener('mousemove', function(e) {
        if (!isMobileDevice() && e.clientX <= 20 && !sidebarVisible) { 
            sidebar.style.left = '0';
            container.classList.add('container-shifted');
            sidebarVisible = true;
        } else if (!isMobileDevice() && e.clientX > 250 && sidebarVisible) {
            sidebar.style.left = '-210px';
            container.classList.remove('container-shifted');
            sidebarVisible = false;
        }
    });

    sidebar.addEventListener('mouseenter', function() {
        sidebar.style.left = '0';
        container.classList.add('container-shifted');
        sidebarVisible = true;
    });
    sidebar.addEventListener('mouseleave', function() {
        if (!sidebarVisible) return;
        sidebar.style.left = '-250px';
        container.classList.remove('container-shifted');
        sidebarVisible = false;
    });

    var modal = document.getElementById('screenshotModal');
    var modalImg = document.getElementById('modalImg');
    var captionText = document.getElementById('caption');
    var closeBtn = document.getElementsByClassName('close')[0];
    var images = document.getElementsByClassName('screenshot-img');

    for (var i = 0; i < images.length; i++) {
        var img = images[i];
        img.onclick = function(evt) {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    // Добавляем слушатель событий для скачивания
    var downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.addEventListener('click', function(e) {
        if(isMobileDevice()){
            e.preventDefault();  // Останавливаем скачивание
            alert('Скачивание возможно только с компьютера.');
        }
    });

    // Функция для определения мобильного устройства
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
});
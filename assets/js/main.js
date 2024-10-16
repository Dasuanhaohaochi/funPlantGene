// main script
(function () {
  "use strict";

  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.closest('.nav-item').classList.toggle("active");
    });
  });

  // Testimonial Slider
  // ----------------------------------------
  new Swiper(".testimonial-slider", {
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".testimonial-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
})();


document.addEventListener('DOMContentLoaded', function() {
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach(button => {
    button.addEventListener('click', function() {
      
      // 获取 .text-to-copy 元素
      const accordionContent = this.parentElement.nextElementSibling;
      
      // 提取要复制的文本内容
      const textToCopy = accordionContent.innerText || accordionContent.textContent;

      // 创建一个临时文本框以执行复制操作
      const tempTextArea = document.createElement('textarea');
      tempTextArea.value = textToCopy;
      document.body.appendChild(tempTextArea);

      // 选择文本并执行复制
      tempTextArea.select();
      document.execCommand('copy');

      // 移除临时文本框
      document.body.removeChild(tempTextArea);

      // 弹出提示，表明内容已复制
      alert('内容已复制到剪贴板!');
    });
  });
});
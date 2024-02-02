var options = {
    strings: ["This is the first sentence.", "This is the second sentence.", "And so on..."],
    typeSpeed: 100,  // Typing speed in milliseconds
    backSpeed: 50,  // Backspacing speed in milliseconds
    loop: false      // Set to true to loop through the sentences indefinitely
  };

  const imageUrls = [
    "Bard_Generated_Image.jpg",
    "Bard_Generated_Image (1).jpg",
    "Bard_Generated_Image (2).jpg",
    "Bard_Generated_Image (3).jpg",
    "Bard_Generated_Image (4).jpeg",
    "Bard_Generated_Image (5).jpeg",
    "Bard_Generated_Image (6).jpeg",
    "Bard_Generated_Image (7).jpeg",
    "Bard_Generated_Image (8).jpeg",
    "Bard_Generated_Image (9).jpeg",
    "Bard_Generated_Image (10).jpeg",
    // "image5.jpg",
    // Add more image URLs as needed
  ];

  var typed = new Typed("#typed-output", options);

  document.addEventListener("DOMContentLoaded", function () {
    const translucentBlock = document.getElementById("translucentBlock");

    function getRandomPosition() {
        const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      
        const xPos = Math.floor(Math.random() * viewportWidth);
        const yPos = Math.floor(Math.random() * viewportHeight);
      
        return { top: yPos, left: xPos };
      }
      
      
    function getRandomSize() {
      const size = Math.floor(Math.random() * (100 - 50 + 1) + 50); // Adjust the size range as needed
      return size;
    }

    function setRandomImageProperties(image) {
      const position = getRandomPosition();
      const size = getRandomSize();

      image.style.top = `${position.top-30}px`;
      image.style.left = `${position.left-30}px`;
      image.style.width = `${size+10}px`;
      image.style.height = `${size+10}px`;
    }

    function showAndHideImage(image) {
      setRandomImageProperties(image);
      image.style.opacity = 1;

      setTimeout(() => {
        image.style.opacity = 0;
      }, Math.floor(Math.random() * (8000 - 5000 + 1) + 5000));
    }

    // Create image elements and append them to the body
    const backgroundImages = imageUrls.map(url => {
      const img = new Image();
      img.src = url;
      img.classList.add("backgroundImage");
      document.body.appendChild(img);

      setInterval(() => {
        showAndHideImage(img);
      }, Math.floor(Math.random() * (8000 - 5000 + 1) + 5000));

      return img;
    });

  });

  
            //AUDIO
            let Music = document.getElementById('myAudio');
            let playButton = document.getElementById('playButton');

            function playPause() {
                Music.play();
            }
            //Toggle Button
            let line1 = document.querySelector('.line1');
            let line2 = document.querySelector('.line2');
            let line3 = document.querySelector('.line3');
            let line4 = document.querySelector('.line4');
            let line5 = document.querySelector('.line5');
            let play = document.querySelector('.play');
            let pause = document.querySelector('.pause');
            //To pause the circle animations, define the following:
            let circle = document.querySelector('.circle');
            let circle2 = document.querySelector('.circle2');

            document.querySelector('.play').onclick = function() {
                this.classList.toggle('active');
                line1.classList.toggle('active');
                line2.classList.toggle('active');
                line3.classList.toggle('active');
                line4.classList.toggle('active');
                line5.classList.toggle('active');
                pause.classList.toggle('active');
                circle.classList.toggle('active');
                circle2.classList.toggle('active');

                if (play.classList.contains('active')) {
                    playPause();

                } else {
                    Music.pause();
                }

            }

            async function setupCamera() {
                try {
                  const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } });
                  const video = document.getElementById('live-feed');
                  video.srcObject = stream;
                } catch (error) {
                  console.error('Error accessing camera:', error);
                }
              }
          
              document.addEventListener('DOMContentLoaded', () => {
                setupCamera();
              });

              function showElement() {
                var element = document.getElementById('container');
                element.style.display = 'block';
              }
            
              // Set a timeout to call the showElement function after 10 seconds
              setTimeout(showElement, 10000); // 10000 milliseconds = 10 seconds
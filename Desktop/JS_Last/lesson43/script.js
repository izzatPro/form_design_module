const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circle = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      OneHeart = document.querySelector('.heart');

      console.log(box);
      console.dir(box);


      for (let i = 0 ; i < circle.length ; i++){
        circle[i].style.background = "red";
      }
      hearts.forEach(item =>{
        item.style.background = "yellow";
      })

      const div = document.createElement('div');
      div.classList.add('purple');
      document.querySelectorAll('.heart')[1].after(div);
      div.insertAdjacentHTML('afterbegin', "<h1>Hello</h1>");
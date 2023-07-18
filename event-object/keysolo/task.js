class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
      DOM-элемент текущего символа находится в свойстве this.currentSymbol.
     */

    const self = this; // Контекст класса будет лежать в self(без него success() не запустился)

    let correctSymbol = 0;

    let word = [];
    let divWord = document.getElementsByClassName('word')[0].children;
    for (let i = 0; i < divWord.length; i++) {
      word.push(divWord[i].textContent);
    }
      
    console.log(word); // слово

    let symbol = document.getElementsByClassName('word')[0].childNodes[0].textContent;
    console.log('символ которорый нужно нажать первым - ' + symbol);
    
    function pressKey(event){

      if (symbol === event.key){
        console.log('Символ нажат правильно - ' + event.key);
        self.success();

        correctSymbol = correctSymbol + 1;
        console.log('счётчик правильных нажатий = ' + correctSymbol); //  счётчик правильных нажатий

        symbol = word[correctSymbol];
        console.log('Следующий символ нажимае - ' + word[correctSymbol]);

        if(word.length === correctSymbol){
          console.log(word.length + ' -= Последний символ. Выиграл =- ' + correctSymbol);

          word = [];
          divWord = document.getElementsByClassName('word')[0].children;
          for (let i = 0; i < divWord.length; i++) {
            word.push(divWord[i].textContent);
          }

          console.log(word); // слово

          correctSymbol = 0;
          
          symbol = word[correctSymbol];
          console.log('Следующий символ, следующего слова нажимае - ' + word[correctSymbol]);
        }

      } else if(symbol !== event.key){
        console.log('Символ нажат НЕправильно - ' + event.key);
        self.fail();

        word = [];
        divWord = document.getElementsByClassName('word')[0].children;
        for (let i = 0; i < divWord.length; i++) {
          word.push(divWord[i].textContent);
        }

        console.log(word); // слово

        correctSymbol = 0;
          
        symbol = word[correctSymbol];
        console.log('Следующий символ, следующего слова нажимае - ' + word[correctSymbol]);
      }
    }

    document.addEventListener('keyup', pressKey);
  }

  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))


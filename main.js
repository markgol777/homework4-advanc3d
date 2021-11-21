const content = document.querySelector('.content');

const array = [
    [{
            newBase: 'true',
            name: 'system',
            url: '<i class="fas fa-laptop"></i>'

        },
        {

            displayNone: true,
            newBase: 'true',
            parent: 'true',
            name: 'Desktop (Public)',
            url: '<i class="fas fa-folder-open"></i>',
            children: {
                name: 'Start Menu',
                parent: 'true',
                url: '<i class="fas fa-folder-open"></i>',
            }
        },

        {
            displayNone: true,
            newBase: 'true',
            parent: 'true',
            name: 'Desktop2 (Public)',
            url: '<i class="fas fa-folder-open"></i>',
            children: {
                name: 'Start Menu2',
                parent: 'true',
                url: '<i class="fas fa-folder-open"></i>',

            }
        },

        {
            displayNone: true,
            newBase: 'true',
            parent: 'true',
            name: 'Desktop3 (Public)',
            url: '<i class="fas fa-folder-open"></i>',
            children: {
                name: 'Start Menu3',
                parent: 'true',
                url: '<i class="fas fa-folder-open"></i>',

            }
        },

        {
            displayNone: true,
            newBase: 'true',
            parent: 'true',
            name: 'Desktop4 (Public)',
            url: '<i class="fas fa-folder-open"></i>',
            children: {
                name: 'Start Menu4',
                parent: 'true',
                url: '<i class="fas fa-folder-open"></i>',

            }
        },

        {
            displayNone: true,
            newBase: 'true',
            parent: 'true',
            name: 'Desktop5 (Public)',
            url: '<i class="fas fa-folder-open"></i>',
            children: {
                name: 'Start Menu5',
                parent: 'true',
                url: '<i class="fas fa-folder-open"></i>',

            }
        },

        {
            displayNone: true,
            newBase: 'true',
            parent: 'true',
            name: 'Desktop6 (Public)',
            url: '<i class="fas fa-folder-open"></i>',
            children: {
                name: 'Start Menu6',
                parent: 'true',
                url: '<i class="fas fa-folder-open"></i>',

            }
        },

        {
            displayNone: true,
            newBase: 'true',
            parent: 'true',
            name: 'Desktop7 (Public)',
            url: '<i class="fas fa-folder-open"></i>',
            children: {
                name: 'Start Menu7',
                parent: 'true',
                url: '<i class="fas fa-folder-open"></i>',

            }
        },

        {
            displayNone: true,
            newBase: 'true',
            parent: 'true',
            name: 'Desktop8 (Public)',
            url: '<i class="fas fa-folder-open"></i>',
            children: {
                name: 'Start Menu8',
                parent: 'true',
                url: '<i class="fas fa-folder-open"></i>',

            }
        },

        {
            displayNone: true,
            newBase: 'true',
            parent: 'true',
            name: 'Desktop9 (Public)',
            url: '<i class="fas fa-folder-open"></i>',
            children: {
                name: 'Start Menu9',
                parent: 'true',
                url: '<i class="fas fa-folder-open"></i>',

            }
        }
    ],

];

function render() {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j].name !== 'system') {
                content.innerHTML += `<li class="smh display-none child"> <button class="plus-mines ${count++}">+</button> ${array[i][j].url} ${array[i][j].name} <div class="children${count-1} display-none"> <pre>    <button class="plus-mines ${count-1} notClikable">+</button> ${array[i][j].children.name}</div> </pre> </li> <br>`;
                for (let o = 0; o < document.getElementsByClassName('plus-mines').length; o++) {
                    document.getElementsByClassName('plus-mines')[o].addEventListener('click', () => {
                        if (event.target.classList.contains('notClikable') === false) {
                            if (event.target.innerText === '+') {
                                console.log(`children${event.target.classList[1]}`)
                                console.log(document.getElementsByClassName(`children${event.target.classList[1]}`)[0].style.display = 'block');
                                event.target.innerText = '-';
                            } else if (event.target.innerText === '-') {
                                console.log(`children${event.target.classList[1]}`)
                                console.log(document.getElementsByClassName(`children${event.target.classList[1]}`)[0].style.display = 'none');
                                event.target.innerText = '+';
                            }
                        }
                        console.log( document.getElementsByClassName('notClikable')[o].addEventListener('click', () => {
                            console.log(event.target);
                            console.log(`children${event.target.classList[1]}`)
                            console.log(document.getElementsByClassName(`children${event.target.classList[1]}`)[0].style.display = 'block');
                            event.target.innerText = '-';
                        }));
                    });

              
                    // document.getElementsByClassName('notClikable')[o].addEventListener('click', () => {
                        // if (event.target.innerText === '+') {
                            // console.log(`children${event.target.classList[1]}`)
                            // console.log(document.getElementsByClassName(`children${event.target.classList[1]}`)[0].style.display = 'block');
                            // event.target.innerText = '-';
                        // }
                    // })

                }
              
            } else {
                content.innerHTML += `<li value="system" class="smh"> <button class="target-system-button">+</button> ${array[i][j].name} </li> <br>`;
            }
        }
    }


}

render();

document.querySelector('.target-system-button').addEventListener('click', () => {
    if (document.querySelector('.target-system-button').innerText === '-') {
        for (let i = 0; i < content.children.length; i++) {
            if (content.children[i].innerText !== '- system') console.log(content.children[i].style.display = 'none');
            setTimeout(() => {
                document.querySelector('.target-system-button').innerText = '+';
            }, 20)
        }
    }
})

document.querySelector('.target-system-button').addEventListener('click', () => {

    if (document.querySelector('.target-system-button').innerText === '+') {
        for (let i = 0; i < content.children.length; i++) {
            content.children[i].style.display = 'block';
        }
    }
    document.querySelector('.target-system-button').innerText = '-';
})
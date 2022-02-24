const APP_ROOT = document.querySelector('app-root');


const APP_BOOKSHELF = createNewElement('app-bookshelf')
const APP_BOOKSHELF_SIDEBAR = createNewElement('app-bookshelf-sidebar')

loadComponentContent('/client/layouts/bookshelf-sidebar.layout.html', APP_BOOKSHELF_SIDEBAR);

const APP_BOOKSHELF_CONTENT = createNewElement('app-bookshelf-content')

let books = [1,2,3];
books.forEach(data => {
    let newBookComponent = createNewElement('app-book')
    newBookComponent.setAttribute('id', data)
    loadComponentContent('/client/components/book.comoponent.html', newBookComponent);
    newBookComponent.addEventListener('click', () => {
        console.log(data)
    })
    APP_BOOKSHELF_CONTENT.appendChild(newBookComponent)
});

APP_BOOKSHELF.appendChild(APP_BOOKSHELF_SIDEBAR)
APP_BOOKSHELF.appendChild(APP_BOOKSHELF_CONTENT)
APP_ROOT.appendChild(APP_BOOKSHELF)
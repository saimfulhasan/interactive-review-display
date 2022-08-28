// const reviewContainer = document.getElementById('review-container')
const reviews = [
    {
        img: 'https://images.unsplash.com/photo-1457732815361-daa98277e9c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW58ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        text: 'I really enjoyed this course! It was fun and interactive as well as educational. I learnt a lot.',
        name: 'Indvah Almay'
    },
    {
        img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        alt: 'Profile picture of Andrew Ligo',
        text: 'A well thought out course with the student in mind. Thanks for creating this for the comunity',
        name: 'Andrew Ligo'
    },
    {
        img: 'https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60',
        text: 'I manage to do this course in my spare time after hours and have only positive things to say.',
        name: 'Cira Enaj'
    }
]

const reviewContainer = document.getElementById('review-container')
function populateDisplay () {
    reviews.forEach(review => {
        const cardElement = document.createElement('div')
        cardElement.classList.add('card')

        cardElement.addEventListener('mouseover', showCard)
        cardElement.addEventListener('mouseleave', blurCard)

        const imageContainer = document.createElement('div')
        imageContainer.classList.add('image-container')
        const imageElement = document.createElement('img')
        imageElement.setAttribute('src', review.img)
        imageElement.setAttribute('alt', review.alt)
        imageContainer.append(imageElement)

        const paragraphElement = document.createElement('p')
        paragraphElement.textContent = review.text
        const nameContainer = document.createElement('div')
        nameContainer.classList.add('name-container')
        nameContainer.textContent = review.name

        cardElement.append(imageContainer, paragraphElement, nameContainer)
        reviewContainer.append(cardElement)
    })
}
populateDisplay ()
function showCard () {
    this.classList.add('active')
}
function blurCard () {
    this.classList.remove('active')
}
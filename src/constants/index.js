import secure from '../images/secure.png'
import share from '../images/share.png'
import sync from '../images/sync.png'

const pages = [{
  order: 0,
  title: 'Own your memories',
  subTitle: 'Your data is stored in a decentralized system to bring you full ownership of your photos',
  image: secure,
  dotColor: 'red'
}, {
  order: 1,
  title: 'Better together',
  subTitle: 'Create private threads to share your photos with friends and family.',
  image: share,
  dotColor: 'yellow'
}, {
  order: 2,
  title: 'Backed up safely',
  subTitle: 'Everytime you take a picture, \n' +
        'Textile will be there to automatically sync your photos.',
  image: sync,
  dotColor: 'blue'
}]

export {pages}

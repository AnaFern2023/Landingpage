import Teller from '../pics/teller.jpeg'
import Spaghetti from '../pics/spagetthi.jpeg'
import Scampi from '../pics/scampi.jpeg'
import Salat from '../pics/salat.jpeg'
import Pizza2 from '../pics/pizza2.jpeg'
import Pizza from '../pics/pizza.jpeg'
import Glass from '../pics/glass.jpeg'
import Frikadelle from '../pics/frikadellen.jpeg'



const footerImages = [
    {
        img: Teller,
        title: "Lorem ipsum",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam",
        price: 50,
    },
    {
        img: Spaghetti,
        title: "amet consectetur ",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam",
        price: 25,
    },
    {
        img: Scampi,
        title: "Totam voluptatibus",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam",
        price: 45,
    },
    {
        img: Salat,
        title: "eligendi rem doloremque",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam",
        price: 20,
    },
    {
        img: Pizza2,
        title: "minima sed",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam",
        price: 15,
    },
    {
        img: Pizza,
        title: "Facere optio",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam",
        price: 18,
    },
    {
        img: Glass,
        title: "facilis aspernatur",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam",
        price: 12,
    },
    {
        img: Frikadelle,
        title: "veritatis",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam",
        price: 30,
    },
]

const Footer = () => {
    return (
        <div className='footer_grid'>
            {footerImages.map((element) =>
                <div >
                    <img src={element.img} alt="" />
                    <h3>{element.title}</h3>
                    <p>{element.description}</p>
                    <p>{element.price}$</p>
                </div>
            )}
        </div>
    );
}

export default Footer;
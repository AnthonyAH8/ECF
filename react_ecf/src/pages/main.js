import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { meals } from "../meals";


function Main() {

    // let button = document.querySelector('.btn')
    // let article = document.querySelector('article')
    // button.addEventListener = ('onmouseup', () => {
    //     article.classList.toggle('btn')
    // })

    // let [meets, setMeet] = useState(false)

    // let fetchMeets = () =>{
    //     meals.then
    //     (response =>{
    //         setMeet(response.data)
    //     })
    // }

    // useEffect(() => fetchMeets(), [])
    return (
        <div className="container">
            <div className="title">
                <h2>Découvrez notre <span>menu</span></h2>
                <ul>
                    <li>Tout</li>
                    <li>Viandes</li>
                    <li>Menu</li>
                </ul>
            </div>
            <div className="flex list">
                {meals.map(meal =>
                    <article>
                        <img src={meal.imageSrc} />
                        <div className="description">
                            <h2>{meal.title}</h2>
                            <h3>{meal.content}</h3>
                            <h4>{meal.price}</h4>
                            <div className="reviews">
                                <svg fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5T1385 1619q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5T365 1569q0-6 2-20l86-500L89 695q-25-27-25-48 0-37 56-46l502-73L847 73q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path></svg>
                                <h5>{meal.rating}</h5>
                                <span>({meal.reviews})</span>
                            </div>
                            <Link to={`/result/${meal.title}`}>
                            <button type="button" className="btn" >Commander</button>
                            </Link>
                        </div>
                    </article>
                )}
            </div>
        </div>
    )
}

export default Main
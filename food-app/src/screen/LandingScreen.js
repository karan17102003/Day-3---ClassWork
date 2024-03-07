import Navbar from "../component/Navbar";
import Footer from "../component/footer";
import "./LandingScreen.css"

const LandingScreen=()=>{
    return(
        <div>
           <>
           <Navbar/>
           <main>
            <div className="main-top">
                <h2 className="hading1">Let us find your</h2>
                <h2 className="hading2">Forever Food.</h2>
                <p className="pargrap">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                <div className="button">
                <button className="btn">Search Now</button>
                <button className="btn">Know More</button>
                </div>
            </div>
            <div className="main-mide">
                <img className="img-mid" src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"/>
                <div className="mide-right">
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                <button className="btn">Get in Touch</button>
                </div>
            </div>
            <div className="main-end">
                <div className="div">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.</p>
                    <div>
                        <div className="img-writer">
                        <img className="img" src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"/>
                        
                        <div className="writer">
                        <h3 className="h3">Gladis Lennon</h3>
                        
                        <span>Head of SEO</span>
                        </div></div>
                    </div>
                </div>
                <div className="div">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!</p>
                <div className="img-writer">
                        <img className="img" src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"/>
                        
                        <div>
                        <h3 className="h3">Gladis Lennon</h3>
                        
                        <span>Head of SEO</span>
                        </div></div>
                </div>
                <div className="div">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt.</p>
                <div className="img-writer">
                        <img className="img" src="https://images.unsplash.com/photo-1603366445787-09714680cbf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=944&q=80"/>
                        
                        <div>
                        <h3 className="h3">Gladis Lennon</h3>
                        
                        <span>Head of SEO</span>
                        </div></div>
                </div>
            </div>
           </main>
           </>
           <Footer/>


        </div>
    )
}
export default LandingScreen;
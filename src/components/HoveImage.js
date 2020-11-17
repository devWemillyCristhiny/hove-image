import React from 'react'
import Tumblr1 from '../imagens/tumblr001.jpg'
import Tumblr2 from '../imagens/tumblr002.jpg'
import Tumblr3 from '../imagens/tumblr003.jpg'
import Tumblr4 from '../imagens/tumblr004.jpg'
import Tumblr5 from '../imagens/tumblr005.jpg'
import Tumblr6 from '../imagens/tumblr006.jpg'
import '../components/HoveImage.css'

export default function HoveImage() {
    return(
        <div className="container">
            <div className="card">
                <div className="box">
                    <div className="imgBox">
                        <img src={Tumblr1}/>
                    </div>
                    <div className="contentBx">
                        <div>
                            <h1>Unidas.</h1>
                            <p>Existem muitas variações de passagens de Lorem Ipsum 
                                disponíveis, mas a maioria sofreu alteração de alguma 
                                forma, por humor injetado ou palavras aleatórias que não 
                                parecem nem um pouco críveis. Se você for usar uma passagem 
                                de Lorem Ipsum, precisa ter certeza de que não há nada embaraçoso 
                                escondido no meio do texto.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <div className="imgBox">
                        <img src={Tumblr2}/>
                    </div>
                    <div className="contentBx">
                        <div>
                            <h1>Dançando!</h1>
                            <p>Existem muitas variações de passagens de Lorem Ipsum 
                                disponíveis, mas a maioria sofreu alteração de alguma 
                                forma, por humor injetado ou palavras aleatórias que não 
                                parecem nem um pouco críveis. Se você for usar uma passagem 
                                de Lorem Ipsum, precisa ter certeza de que não há nada 
                                embaraçoso escondido no meio do texto.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <div className="imgBox">
                        <img src={Tumblr3}/>
                    </div>
                    <div className="contentBx">
                        <div>
                            <h1>Em uma praia.</h1>
                            <p>Existem muitas variações de passagens de Lorem Ipsum 
                                disponíveis, mas a maioria sofreu alteração de alguma 
                                forma, por humor injetado ou palavras aleatórias que não 
                                parecem nem um pouco críveis. Se você for usar uma passagem 
                                de Lorem Ipsum, precisa ter certeza de que não há nada embaraçoso 
                                escondido no meio do texto
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <div className="imgBox">
                        <img src={Tumblr4}/>
                    </div>
                    <div className="contentBx">
                        <div>
                            <h1>Super-mercado.</h1>
                            <p>Existem muitas variações de passagens de Lorem Ipsum 
                                disponíveis, mas a maioria sofreu alteração de alguma 
                                forma, por humor injetado ou palavras aleatórias que não 
                                parecem nem um pouco críveis. Se você for usar uma passagem 
                                de Lorem Ipsum, precisa ter certeza de que não há nada embaraçoso 
                                escondido no meio do texto
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <div className="imgBox">
                        <img src={Tumblr5}/>
                    </div>
                    <div className="contentBx">
                        <div>
                            <h1>Gostam de ser desconhecidas</h1>
                            <p>Existem muitas variações de passagens de Lorem Ipsum 
                                disponíveis, mas a maioria sofreu alteração de alguma 
                                forma, por humor injetado ou palavras aleatórias que não 
                                parecem nem um pouco críveis. Se você for usar uma passagem 
                                de Lorem Ipsum, precisa ter certeza de que não há nada embaraçoso 
                                escondido no meio do texto
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="box">
                    <div className="imgBox">
                        <img src={Tumblr6}/>
                    </div>
                    <div className="contentBx">
                        <div>
                            <h1>Comendo Nutella...</h1>
                            <p>Existem muitas variações de passagens de Lorem Ipsum 
                                disponíveis, mas a maioria sofreu alteração de alguma 
                                forma, por humor injetado ou palavras aleatórias que não 
                                parecem nem um pouco críveis. Se você for usar uma passagem 
                                de Lorem Ipsum, precisa ter certeza de que não há nada embaraçoso 
                                escondido no meio do texto
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
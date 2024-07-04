import React from 'react';
import "./styles/App.css"
import {features, SubscriptionCard} from "./components/SubscriptionCard/SubscriptionCard";

function App() {
    return (
        <div className="App">
            <div className="App-Container">
                <h1 className="App-Title">Finance Navigator</h1>
                <h2 className="App-Subtitle">Ваш надежный спутник в мире финансов</h2>
                <div className="App-Content">

                    <SubscriptionCard title="Basic" price="$5/мес"
                                      description=" Базовый уровень подписки, предоставляющий доступ к основным инструментам финансового планирования и анализа. Включает в себя:"
                                      features={features.featuresBasic}/>
                    <SubscriptionCard title="Standard" price="$10/мес"
                                      description=" Базовый уровень подписки, предоставляющий доступ к основным инструментам финансового планирования и анализа. Включает в себя:"
                                      features={features.featuresStandard}

                                      mostPopular={true}/>
                    <SubscriptionCard title="Premium" price="$20/мес"
                                      description=" Премиум уровень подписки, предоставляющий комплексные финансовые решения и персонализированное обслуживание. Включает в себя:"
                                      features={features.featuresPremium}/>
                    <SubscriptionCard title="Enterprise" price="$30/мес"
                                      description="Корпоративный уровень подписки, разработанный для бизнесов и предприятий, желающих оптимизировать свои финансовые процессы. Включает в себя:"
                                      features={features.featuresEnterprise}/>

                </div>
            </div>
        </div>
    );
}

export default App;

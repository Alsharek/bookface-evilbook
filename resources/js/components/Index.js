import React from 'react';
import ReactDOM from 'react-dom';

function Index() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">BOOKFAC  E</div>
                        <p>  </p>
                        <form>
                            <input id="password" type="password" class="form-control" name="password" placeholder="Password"> 
                            </form>
                        <div className="card-body">eViLBOOK</div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}

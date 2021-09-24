import React,{useState} from 'react'
import "../../styles/Modal styles/aramamodel.css"
import Modal from 'react-modal';

export default function AramaModal() {

    const [modalIsOpen, setmodalIsOpen] = useState(false)

    return (
        <div className="aramaModalContainer">
            <Modal isOpen={modalIsOpen}>
                <h1>ARAMA MODAL</h1>
                <p1>modal içerik denemesi</p1>
                <button onClick={()=>setmodalIsOpen(false)}>X</button>
            </Modal>
        </div>
    )
}

/*  
<LoginModel
            cancel={() => this.setState({ loginModelVisible: false })}
            visible={this.state.loginModelVisible}
          />
*/



/*  


*/

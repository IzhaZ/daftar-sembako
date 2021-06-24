import React, {useState} from "react";
import './Ingredients.css';

const IngredientForm = () => {

    const submitHandler = event => {
        event.preventDefault()
        fetch("https://sembako-db-default-rtdb.asia-southeast1.firebasedatabase.app/hargaSembako.json",{
            method: 'POST',
            body: JSON.stringify(inputState),
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            console.log(response.json())
        })
    }

    const [inputState, setInputState] = useState({
        nama: '',
        harga: ''
    })

    console.log(inputState)

    return (
        <div class="form">
            <form onSubmit={submitHandler}>
                <div>
                <div class="title">Sembako</div>
                <div class="subtitle">Masukkan sembako di bawah ini!</div>
                <div class="input-container ic1">
                    <input 
                        id="title"
                        class="input"
                        type="text"
                        placeholder=" "
                        value={inputState.nama}
                        onChange={
                            event => {
                                const newNama = event.target.value
                                setInputState(prevInputState => ({
                                    nama: newNama,
                                    harga: prevInputState.harga
                                }))
                            }
                        }
                    />
                    <div class="cut"></div>
                    <label htmlFor =  {"title"} class="placeholder"> Nama Sembako </label>
                </div>
                </div>
                
                <div class="input-container ic2">
                    <input 
                        id="harga" 
                        class="input" 
                        type="text" 
                        placeholder=" "
                        value={inputState.harga}
                        onChange={
                            event => {
                                const newHarga = event.target.value
                                setInputState(prevInputState => ({
                                    harga: newHarga,
                                    nama: prevInputState.nama
                                }))
                            }
                        }
                    />
                    <div class="cut"></div>
                    <label htmlFor =  {"harga"} class="placeholder"> Harga Sembako </label>
                </div>
                
                <div>
                    <button class="submit" type = "submit"> Tambah </button>
                </div>
            </form>
        </div>
    )
}

export default IngredientForm
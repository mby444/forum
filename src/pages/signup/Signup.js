import { useState } from "react";
import { mainAPI } from "../../api/axios";

export default function Signup() {
    /* Input state */
    const [emailInput, setEmailInput] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [cpasswordInput, setCpasswordInput] = useState("");
    /* =========== */

    /* Error label state */
    const [emailError, setEmailError] = useState("");
    const [nameError, setNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [cpasswordError, setCpasswordError] = useState("");
    /* ================= */

    const trimExtraSpace = (value = "") => {
        return value.split(" ").filter((v) => v !== "").join(" ");
    }

    const errorMessageGenerator = {
        emailError(value = emailInput) {
            const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            return value.length === 0 ? "*Email harus diisi"
                : !emailRegex.test(value) ? "*Email tidak valid"
                : "";
        },

        nameError(value = nameInput) {
            const nameRegex = /[a-zA-Z ]+/;
            return value.length === 0 ? "*Nama wajib diisi"
                : !nameRegex.test(value) ? "Nama tidak valid"
                : "";
        },

        passwordError(value = passwordInput) {
            return value.length === 0 ? "*Password harus diisi"
                : /\s/g.test(value) ? "*Password tidak boleh menggunakan spasi"
                : value.length < 8 ? "*Password minimal 8 karakter"
                : "";
        },

        cpasswordError(value = cpasswordInput) {
            return value.length === 0 ? "*Konfirmasi password harus diisi"
                : /\s/g.test(value) ? "*Konfirmasi password tidak boleh menggunakan spasi"
                : value.length < 8 ? "*Konfirmasi password minimal 8 karakter"
                : "";
        }
     };

    const validateInputs = (callback = Function(), errCallback = Function()) => {
        const errorObj = { emailError: "", nameError: "", passwordError: "", cpasswordError: "" };
        const errorObjKeys = Object.keys(errorObj);
        const inputs = [emailInput, nameInput, passwordInput, cpasswordInput];
        for (let i = 0; i < inputs.length; i++) {
            const [key, value] = [errorObjKeys[i], trimExtraSpace(inputs[i])];
            errorObj[key] = errorMessageGenerator[key](value);
        }
        const isFormError = Boolean(errorObj.emailError || errorObj.nameError || errorObj.passwordError || errorObj.cpasswordError);
        !isFormError ? callback() : errCallback(errorObj);
    };

    const submitForm = () => {
        console.log("Submited");
    };

    const showInputErrors = (err) => {
        console.log(err);
    };

    const handleClickBtn = () => {
        validateInputs(() => {
            submitForm();
        }, (err) => {
            showInputErrors(err);
        });
    };

    return (
        <div className="signup-wrapper">
            <div className="signup-container">
                <div className='signup-header'>
                    <h3 className='signup-header-text'>Daftar</h3>
                </div>
                <div className='signup-body'>
                    <div className='signup-input-container'>
                        <label className='signup-input-label'>Email</label>
                        <input className='signup-input' value={emailInput} onChange={(ev) => setEmailInput(ev.target.value)} />
                        <label className='signup-input-error-label'>{emailError}</label>
                    </div>
                    <div className='signup-input-container'>
                        <label className='signup-input-label'>Nama</label>
                        <input className='signup-input' value={nameInput} onChange={(ev) => setNameInput(ev.target.value)} />
                        <label className='signup-input-error-label'>{nameError}</label>
                    </div>
                    <div className='signup-input-container'>
                        <label className='signup-input-label'>Kata Sandi</label>
                        <input className='signup-input' value={passwordInput} onChange={(ev) => setPasswordInput(ev.target.value)} />
                        <label className='signup-input-error-label'>{passwordError}</label>
                    </div>
                    <div className='signup-input-container'>
                        <label className='signup-input-label'>Konfirmasi Kata Sandi</label>
                        <input className='signup-input' value={cpasswordInput} onChange={(ev) => setCpasswordInput(ev.target.value)} />
                        <label className='signup-input-error-label'>{cpasswordError}</label>
                    </div>
                    <div className="signup-btn-container">
                        <button className='signup-btn' onClick={handleClickBtn}>Daftar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { useNavigate } from 'react-router-dom'
import { BsPhone, BsEnvelope } from "react-icons/bs";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {

    const navigate = useNavigate()

    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-4">
                <section className="mb-4">
                    <a
                        href="https://www.facebook.com/daniel.frias.9674/"
                        target="_blank"
                        className="btn btn-outline-light btn-floating rounded-circle border border-2 m-1"
                        role="button"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://github.com/dannielfrs"
                        target="_blank"
                        className="btn btn-outline-light btn-floating rounded-circle border border-2 m-1"
                        role="button"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/daniel-frias-339492bb/"
                        target="_blank"
                        className="btn btn-outline-light btn-floating rounded-circle border border-2 m-1"
                        role="button"
                    >
                        <FaLinkedinIn />
                    </a>
                </section>
                <section className="">
                    <div className="col-auto">
                        <p className="pt-2 display-6">Daniel Frias Rosales</p>
                    </div>
                </section>
                <section className="mb-4 text-start">
                    <div className="col-lg-4 col-sm-6 mx-auto">
                        <div><BsPhone />  3314468468 </div>
                        <div><BsEnvelope />  dannielfrs@gmail.com</div>
                    </div>
                </section>
            </div>
            <div className="text-center p-3">
                © 2023 Copyright:
                <a className="link text-white ps-2" onClick={() => navigate('/')}>EsCine.com</a>
            </div>
        </footer>
    )
}
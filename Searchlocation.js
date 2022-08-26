import React from 'react'
import { FaSearch } from 'react-icons/fa';
export default function Searchlocation() {

    return (
        <div>
            {/* <nav class=" container-fluide navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"><img src="sikarinfologo.png" alt="" style={{
                        height: '5rem',
                        width: '12rem',
                    }} /></a>
                    {/* <div>
                        <h5>Explore more</h5>
                    </div> 
                       <form className="d-flex" role="search">
                        <button  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Login here</button>
                        <ul className='mx-4' style={{ listStyleType: 'none' }}>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Know more
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="/">About Us</a></li>
                                    <li><a class="dropdown-item" href="/">Our team</a></li>
                                    <li><a class="dropdown-item" href="/">Partner With Us </a></li>
                                </ul>
                            </li>
                        </ul>
                    </form>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className=" text-center my-2" style={{ border: '1px solid grey', borderRadius: '1rem' }} >
                        <ul className='p-2' style={{
                            display: 'inline-flex',
                            columnGap: '5rem',
                            listStyleType: 'none'
                        }}>
                            <li>
                                <div className="">
                                    <input list='City-names-list' id='City-names' placeholder='Choose Property type' className='p-1 border-0 bg-light w-100 text-center' />
                                    <datalist id="City-names-list">
                                        <option value="Modern Student Housing"></option>
                                        <option value="Co-living for Professionals"></option>
                                        <option value="Managed Apartements"></option>
                                        {/* <option value="Delhi"></option> 
                                    </datalist>
                                    <p className='my-1 inside-p' style={{ fontSize: 'smaller', color: 'grey' }}>Select your living space</p>
                                </div></li>
                            <li>
                                <div className=" order-5" >
                                    Find in and around...
                                    <button type="submit" style={{ border: '0', height: '2rem', width: '2rem', borderRadius: '.3rem' }}><FaSearch style={{ height: '1.3rem', width: '1.3rem', color: '#fff' }} /></button> <br />
                                    <input type="search" className='search-input' placeholder='Enter College/office/locality/city' />
                                </div>
                            </li>
                        </ul>
                    </div>
                 
                </div>
            </nav> */}

            <nav class="navbar bg-light" style={{ borderBottom: '1px solid lightgrey', boxShadow:'0px 0px 20px 3px rgba(0 ,0, 0 ,.1)' }}>
                <div class="container-fluid" >
                    <a class="navbar-brand" href="/"><img src="sikarinfologo.png" alt="" style={{
                        height: '5rem',
                        width: '12rem',
                    }} /></a>
                    <ul style={{ listStyleType: 'none' }}>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Know more
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/">About Us</a></li>
                                <li><a class="dropdown-item" href="/">Our team</a></li>
                                <li><a class="dropdown-item" href="/">Partner With Us </a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className='my-2' style={{ display: 'inline-flex', listStyleType: 'none', columnGap: '4rem', textAlign: 'center', float: 'left', paddingRight: '2rem' }}>
                        <li>
                            <input list='City-names-list' id='City-names' placeholder='Choose Property Type' className='p-1 border-0 bg-light w-100 text-center' />
                            <datalist id="City-names-list">
                                <option value="Modern Student Housing"></option>
                                <option value="Co-living for Professionals"></option>
                                <option value="Managed Apartments"></option>
                            </datalist>
                            <p className='' style={{ fontSize: 'smaller', color: 'grey' }}>Select your living space</p>
                        </li>
                        <li>
                            Find in and around...
                            <button type="submit" style={{ height: '2rem', width: '2rem', borderRadius: '10px' }}><FaSearch style={{ fontSize: '1.3rem' }} className='search-icon' /></button> <br />
                            <input type="search" className='search-input my-1' placeholder='Enter College/office/locality/city' />
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search"> */}
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Request to Callback</button>

                    {/* </form> */}
                </div>
            </nav>
        </div>
    )
}

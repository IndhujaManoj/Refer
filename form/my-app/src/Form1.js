import React from 'react'

const Form1 = () => {
    // const [register, setRegister] = useState({
    //     userid: loginuser,
    //     email: '',
    //     mobile: '',
    //     address: '',
    //     under_userid: underuser,
    //     side: clickside,
    //     bankaccountno: '',
    //     sponserId: loginuser,
    //     name: '',
    //     dateOf_birth: '',
    //     maritalStatus: '',
    //     gender: '',
    //     country: '',
    //     state: '',
    //     district: '',
    //     city: '',
    //     pincode: '',
    //     bankName: '',
    //     account_HolderName: '',
    //     branch: '',
    //     ifscCode: '',
    //     fathersName: '',
    //     nomineeName: '',
    //     relationShip: '',
    //     pancardNo: '',
    //     aadharcardNo: '',
    // })

    return (
        <div>
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <title>Registration Form in HTML CSS</title>
                <link rel="stylesheet" href="style.css" />
            </head>
            <body>
                <section class="container">
                    <header>Registration Form</header>
                    <form action="#" class="form">
                        <div className="section">
                            <h2>Sponser details</h2>
                            <div className='column'>
                                <div class="input-box">
                                    <label>Sponser Id</label>
                                    <input type="text" placeholder="Enter full name" name="sponserid" id="sponserid"
                                        readOnly
                                    />
                                </div>

                                <div class="input-box">
                                    <label>Under User Id</label>
                                    <input type="text" placeholder="Enter email address"
                                        id="under_user_id" name="under_user_id"
                                    />
                                </div>
                            </div>

                            <fieldset className="form-group">
                                <div className="row">
                                    <legend className="col-form-label col-sm-2 pt-0"><b>Side</b></legend>
                                    <div className="col-sm-10">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="side"
                                                id="gridRadios1"

                                            />
                                            <label className="form-check-label" htmlFor="gridRadios1">
                                                {/* {clickside} */}
                                            </label>
                                        </div>

                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className='section'>
                            <h2>Personal Details</h2>
                            <div class="input-box">
                                <label>Full Name</label>
                                <input type="text" placeholder="Enter full name"
                                    name="name"
                                    id="name"
                                />
                            </div>

                            <div class="input-box">
                                <label>Email Address</label>
                                <input type="text" placeholder="Enter email address"
                                    name="email"
                                    id="email"
                                    required />
                            </div>

                            <div class="input-box">
                                <label>Father's Name</label>
                                <input type="text" placeholder="Enter Father's name"
                                    name="fathername"
                                    id="fathername"
                                    required />
                            </div>

                        </div>
                        <div className='column'>

                            <div class="input-box">

                                <label>Nominee Name</label>
                                <input type="text" placeholder="Enter nominee name"
                                    name="nominee"
                                    id="nominee"
                                />
                            </div>


                            <div class="input-box">
                                <label>Relation Ship</label>
                                <input type="text" placeholder="RelationShip"
                                    name="relationship"
                                    id="relationship"
                                    required />
                            </div>



                            <div class="column">
                                <div class="input-box">
                                    <label>Phone Number</label>
                                    <input type="number" placeholder="Enter phone number"
                                        name="mobile"
                                        id="mobile"
                                        required />
                                </div>
                                <div class="input-box">
                                    <label>Birth Date</label>
                                    <input type="date" placeholder="Enter birth date"
                                        required />
                                </div>
                            </div>
                            <div class="gender-box">
                                <h3>Gender</h3>
                                <div class="gender-option">
                                    <div class="gender">
                                        <input type="radio" id="check-male" name="gender" value='male'
                                            checked />
                                        <label for="check-male">male</label>
                                    </div>
                                    <div class="gender">
                                        <input type="radio" id="check-female" name="gender" value='female'
                                            checked />

                                        <label for="check-female">Female</label>
                                    </div>
                                    <div class="gender">
                                        <input type="radio" id="check-other" name="gender" />
                                        <label for="check-other">Others</label>
                                    </div>
                                </div>
                            </div>
                            <div class="gender-box">
                                <h3>Marital Status</h3>
                                <div class="gender-option">
                                    <div class="gender">
                                        <input type="radio" id="check-married" name="maritalStatus" value='married'
                                            checked />
                                        <label for="check-male">Married</label>
                                    </div>
                                    <div class="gender">
                                        <input type="radio" id="check-unmarried" name="maritalStatus" value='unmarried'
                                        />


                                        <label for="check-female">Unmarried</label>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='section'>
                            <h2>Proof Details</h2>
                            <div className='column'>
                                <div class="input-box">
                                    <label>AadharCard Number</label>
                                    <input type="text" placeholder="Enter Father's name" required
                                    />
                                </div>
                                <div class="input-box">

                                    <label>PanCard Number</label>
                                    <input type="text" placeholder="Enter nominee name" required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='section'>
                            <h2>Address Details</h2>

                            <div class="input-box address">
                                <label>Address</label>
                                <input type="text" placeholder="Enter street address" required />
                                <div class="column">
                                    <div class="select-box">
                                        <select
                                        // onChange={(e) => setRegister({ ...register, country: e.target.value })} 
                                        >

                                            <option hidden>Country</option>
                                            <option>America</option>
                                            <option>Japan</option>
                                            <option>India</option>
                                            <option>Nepal</option>
                                        </select>
                                    </div>
                                    <input type="text" placeholder="Enter your state" required
                                    // onChange={(e) => setRegister({ ...register, state: e.target.value })}
                                    />


                                    <input type="text" placeholder="Enter your city"
                                        // onChange={(e) => setRegister({ ...register, city: e.target.value })}
                                        required />

                                </div>
                                <div class="column">
                                    <input type="text" placeholder="Enter your district" required
                                    // onChange={(e) => setRegister({ ...register, district: e.target.value })}
                                    />
                                    <input type="number" placeholder="Enter postal code" required
                                    // onChange={(e) => setRegister({ ...register, pincode: e.target.value })}
                                    />
                                </div>
                            </div>

                        </div>
                        <div className='section'>
                            <h2>Bank Details</h2>
                            <div className='column'>
                                <div class="input-box">
                                    <label>Bank Account No</label>
                                    <input type="text" placeholder="Bank Account Number"
                                        // onChange={(e) => setRegister({ ...register, bankaccountno: e.target.value })}

                                        required />
                                </div>

                                <div class="input-box">
                                    <label>Bank Name</label>
                                    <input type="text" placeholder="Bank  Name" required
                                    // onChange={(e) => setRegister({ ...register, bankName: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className='column'>
                                <div class="input-box">
                                    <label>Account Holder Name</label>
                                    <input type="text" placeholder=" Account Holder Name" required
                                    // onChange={(e) => setRegister({ ...register, account_HolderName: e.target.value })}
                                    />
                                </div>

                                <div class="input-box">
                                    <label>Branch</label>
                                    <input type="text" placeholder="Enter Branch" required
                                    // onChange={(e) => setRegister({ ...register, branch: e.target.value })}
                                    />
                                </div>
                                <div class="input-box">
                                    <label>IFSC</label>
                                    <input type="text" placeholder="Enter IFSC Code" required
                                    // onChange={(e) => setRegister({ ...register, branch: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>




                        <button>Submit</button>
                    </form>
                </section>
            </body>
        </div>
    );

}

export default Form1

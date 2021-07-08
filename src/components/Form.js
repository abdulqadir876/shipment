import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

const schema = yup.object().shape({
    firstName: yup.string().required("First Name should be required please").min(4),
    shipmentMode: yup
   .number()
    .required("Please select a shipment mode"),
    shipmentEnable: yup
   .number()
    .required("Please select a shipment Enable"),
    radioGroup: yup
   .number()
    .required("Please select a shipment Enable"),
    
    code: yup.string().required("Shipment should be required please").min(5),
    description: yup.string().required("Description should be required please").min(10),
    
  });

const Form = () => {
        const { register,handleSubmit, formState: { errors },} = useForm({
            resolver: yupResolver(schema),
        });

      
      const submitForm = (data) => {
          console.log(data)
      };
    return (
        <div className="container">

            <form className="shadow-lg"  onSubmit={handleSubmit(submitForm)}>
               
                <div className="form__select d-flex ">
                    <label>Shipment Mode</label>
                    <div className="sub-form ml-2">
                        <select className="form-control" name="shipmentMode"  {...register('shipmentMode', { required: true })} >
                            <option value={null} selected disabled>Select</option>
                            <option value={0}>Air</option>
                            <option value={1}>Trunk</option>
                            <option value={2}>Ship</option>
                            <option value={3}>Train</option>
                        </select>
                        <p className="text-danger"> {errors.shipmentMode?.message} </p>
                    </div>
                </div>

                <div className="form__select d-flex">
                    <label>Shipment Code</label>
                    <div className="sub-form ml-2">
                        <input className="form-control" name="code"  
                        {...register('code', { required: true })}  autoComplete="off"/>
                        <p className="text-danger"> {errors.code?.message} </p>
                    </div>
                </div>

                <div className="form__select d-flex">
                    <label>Enable Shipment</label>
                    <div className="sub-form ">
                        <select className="form-control" name="shipmentEnable"  {...register('shipmentEnable', { required: true })}>
                            <option value={null}>Select</option>
                            <option value={0}>Yes</option>
                            <option value={1}>No</option>
                        </select>
                        <p className="text-danger"> {errors.shipmentEnable?.message} </p>
                    </div>
                </div>

                <div className="form__select d-flex" name="radioGroup">
                 <label className="mr-4">Shipment Grade</label>
                    <div class="form-check ">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label class="form-check-label" for="flexRadioDefault1">
                            A
                    </label>
                    </div>
                    <div class="form-check ">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label class="form-check-label" for="flexRadioDefault1">
                            B
                    </label>
                    </div>
                    <div class="form-check ">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label class="form-check-label" for="flexRadioDefault1">
                        C
                    </label>
                    </div>
                </div>

                <div className="form__select d-flex">
                    <label>Description</label>
                    <div className="sub-form ml-5">
                    <textarea class="form-control" name="description" id="exampleFormControlTextarea1" rows="3"
                     {...register('description', { required: true })}  autoComplete="off"
                    />
                    <p className="text-danger"> {errors.description?.message} </p>
                    </div>
                </div>

                {/* Shipment Description */}
                

                <div style={{marginRight: '300px'}} className="mt-3 d-flex flex-row justify-content-center align-items-center">
                    <input  type="submit" id="submit" className="btn btn-primary mt-3 mb-3" value="Create Shipment"/>
                </div>
            </form>
            
        </div>
    )
}

export default Form

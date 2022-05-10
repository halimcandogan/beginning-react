import React from 'react'

export default function Containerabout({title, context}) {
  return (
    <div>
   <section id="about" >
    <div class="container-fluid pb-3 mt-5">
      <h6 class="display-6 text-white d-flex justify-content-center pt-3">{title} </h6>
      <div class="container bg-white rounded shadow-lg ">
        <p class="p-4 fs-5">{context}</p>
      </div>
    </div>
  </section>
    </div>
  )
}

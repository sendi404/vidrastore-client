import React from "react";
export async function getServerSideProps(context) {
    const data = context.query.id
    return {
      props: {data}, 
    }
  }
export default function CekoutMenu({ data }) {
    return(
        <h1>HALLO {data}</h1>
    )
}
import React from 'react'
import DraftForm from '../components/DraftForm'
import MaxWidthWrapper from '../components/MaxWidthWrapper'

const DrafMailPage = () => {
  return (
    <>
    <MaxWidthWrapper className="flex flex-col justify-center text-center">
        <h1>Draft Mail Here: </h1>
        <DraftForm />
    </MaxWidthWrapper>
    </>
  )
}

export default DrafMailPage
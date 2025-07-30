import React from 'react'
import DraftForm from '../components/DraftForm'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import Gradient from '../components/Gradient'

const DrafMailPage = () => {
  return (
    <>
    <MaxWidthWrapper className="flex flex-col justify-center text-center">
        <Gradient/>
        <DraftForm />
    </MaxWidthWrapper>
    </>
  )
}

export default DrafMailPage
import {
  VStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

import { SubmitBtn } from 'components/ui/Button/Submit'
// hooks
import { useState } from 'react'

export const IniciativaForm = ({ id }) => {
  // input
  const form = { id: id, amount: '10.00' }
  const [info, setinfo] = useState(form)
  const handleInput = (e) => {
    setinfo({ id: id, amount: e })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.info(info)
  }
  const isValid = info.amount > 0

  return (
    <>
      {/* Donation Form */}
      <form method="POST" onSubmit={handleSubmit}>
        <VStack>
          <NumberInput
            onChange={handleInput}
            type="number"
            value={info.value}
            name="amount"
            defaultValue={10}
            precision={2}
            min="0"
            step={5}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>

          <SubmitBtn isValid={isValid} name="enviar donación" />
        </VStack>
      </form>
    </>
  )
}

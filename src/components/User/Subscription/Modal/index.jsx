import { Stack, VStack } from '@chakra-ui/react'
import { BackButton } from 'components/ui/Button/Back'
import { RadioCard } from 'components/User/Subscription/Card'
import { SubmitBtn } from 'components/ui/Button/Submit'
// hooks
import { useRadioGroup } from '@chakra-ui/radio'
import { useState } from 'react'
// data
import { subsOptions } from 'assets/data'
import { user } from 'assets/data'

export const SubscriptionModal = () => {  
  const options = Object.keys(subsOptions).map(e => subsOptions[e].value)
  // 🔥 se obtiene de usuario
  const [plan, setplan] = useState(user.plan)
  const handleChange = (e) => setplan(e)
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'subscription',
    defaultValue: plan,
    onChange: handleChange,
  })
  const group = getRootProps()
  // submit
  const handleSubmit = (e) => {
    e.preventDefault()
    console.info(plan)
  }
  const isValid = true

  return (
    <>
      <BackButton />

      <Stack>
        <VStack {...group}>
          {options.map((value) => {
            const radio = getRadioProps({ value })
            return (
              <RadioCard key={value} {...radio}>
                {value}
              </RadioCard>
            )
          })}
        </VStack>
        <form method="POST" onSubmit={handleSubmit}>
          <SubmitBtn isValid={isValid} name="Buy" />
        </form>
      </Stack>
    </>
  )
}

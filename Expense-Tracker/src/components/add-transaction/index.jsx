import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Radio, RadioGroup } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { FaPersonDotsFromLine } from 'react-icons/fa6'
import { GlobalContext } from '../../context'

const TransactionForm = ({onClose, isOpen}) => {
    const {formData, setFormData, value, setValue, handleFormSubmit} = useContext(GlobalContext)

    function handleFormData(event) {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      })
    }

    function handleSubmit(event){
      event.preventDefault();
      handleFormSubmit(formData)
    }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <ModalOverlay/>
          <ModalContent>
            <ModalHeader>
              Add New Transaction
            </ModalHeader>
            <ModalCloseButton/>
            <ModalBody>
              <FormControl>
                <FormLabel>Enter Description</FormLabel>
                <Input onChange={handleFormData} placeholder='Enter Transaction description' name='description' type='text'/>
              </FormControl>
              <FormControl>
                <FormLabel>Enter Amount</FormLabel>
                <Input onChange={handleFormData} placeholder='Enter Transaction amount' name='amount' type='number'/>
              </FormControl>
              <RadioGroup value={value} onChange={setValue} mt={"5"}>
                <Radio onChange={handleFormData} checked={formData.type === "income"} name='type'colorScheme='blue' value='income'>Income</Radio>
                <Radio onChange={handleFormData} checked={formData.type === "expense"} name='type' ml={4} colorScheme='red' value='expense'>Expense</Radio>
              </RadioGroup>
            </ModalBody>
            <ModalFooter>
              <Button mr={"4"} onClick={onClose}>Cancel</Button>
              <Button type='submit' onClick={onClose}>Add</Button>
            </ModalFooter>
          </ModalContent>
        
      </form>
    </Modal>
  )
}

export default TransactionForm
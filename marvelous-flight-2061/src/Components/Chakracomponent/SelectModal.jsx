import React, { useContext } from 'react';
import {ArrowBackIcon } from '@chakra-ui/icons'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Select,
    Heading,
  } from '@chakra-ui/react';
  import {ChevronDownIcon} from '@chakra-ui/icons';
import { Appcontext } from '../../Context/Appcontext';
import { Link } from 'react-router-dom';

const SelectModal = () => {
  const [data, setData] = useContext(Appcontext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div>
         <Button onClick={onOpen} opacity="0.5">Round trip <ChevronDownIcon/></Button>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader></ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <Link to="/"><ArrowBackIcon/></Link>
    <Heading as='h2' size='md' noOfLines={1}>
    Select your pick up country/city
  </Heading>
  <br />
     <Select>
      <option value="India">India</option>
      <option value="USA">Egypt</option>
      <option value="Indonesia">Indonesia</option>
      <option value="Vietnam">Vietnam</option>
     </Select>
     <br />
     <Select name="city" onChange={handleChange}>
      <option value="Kolkata">Kolkata</option>
      <option value="Mumbai">Mumbai</option>
      <option value="Delhi">Delhi</option>
      <option value="Bengalore">Bengalore</option>
     </Select>
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='green' width="400px" mr={3} onClick={onClose}>
       Submit
      </Button>
    </ModalFooter>
  </ModalContent>
</Modal>
    </div>
  )
}

export default SelectModal

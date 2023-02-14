import './App.css'
import { useState } from 'react'
import Button from './Button'
import Alert from './Alert'
import Badge from './Badge'
import Card from './Card'
import Modal from './Modal'
import { BsInfoCircleFill } from 'react-icons/bs'
import { BsInfoCircle } from 'react-icons/bs'
import { TiStarFullOutline } from 'react-icons/ti'
import { FaSun } from 'react-icons/fa'
import { FaMoon } from 'react-icons/fa'

function App() {
  const [showModal, setShowModal] = useState(false)

  function handleShow() {
    setShowModal(!showModal)
  }

  return (
    <div className='flex gap-4'>
      <section className='flex flex-col'>
        <h1>Buttons</h1>
        <Button size='2rem' color='red' disabled={true}>Hello</Button>
        <Button size='1rem' color='green' disabled={false}>Hello</Button>
      </section>
      <section className='flex flex-col'>
        <h1>Alerts</h1>
        <Alert color='red' icon={<BsInfoCircleFill />} onDismiss={function onDismiss() { return alert("Alert dismissed!") }}>Hello</Alert>
        <Alert color='blue' icon={<BsInfoCircle />} onDismiss={function onDismiss() { return alert("Alert dismissed!") }}>Hello</Alert>
      </section>
      <section>
        <h1>Badges</h1>
        <Badge color='green' size='1rem' icon={<TiStarFullOutline />}>Star</Badge>
        <Badge color='orange' size='1.5rem' icon={<FaSun />}>Sun</Badge>
        <Badge color='indigo' size='0.75rem' icon={<FaMoon />}>Moon</Badge>
      </section>
      <section>
        <h1>Card</h1>
        <Card href='https://www.google.se/search?q=cat&hl=sv&authuser=0&tbm=isch&source=hp&biw=1280&bih=569&ei=BNTnY9KXNvaBxc8Posqn2AQ&iflsig=AK50M_UAAAAAY-fiFG8DVIReISXRz5TnjzJ-lQKkgusS&ved=0ahUKEwjSqZ7Xgo79AhX2QPEDHSLlCUsQ4dUDCAc&uact=5&oq=cat&gs_lcp=CgNpbWcQAzILCAAQgAQQsQMQgwEyCAgAEIAEELEDMgUIABCABDIICAAQgAQQsQMyCAgAEIAEELEDMgQIABADMggIABCABBCxAzIICAAQsQMQgwEyCwgAEIAEELEDEIMBMggIABCABBCxA1AAWN8EYLEGaABwAHgAgAFGiAHDAZIBATOYAQCgAQGqAQtnd3Mtd2l6LWltZw&sclient=img' imgSrc='https://i.guim.co.uk/img/media/c5e73ed8e8325d7e79babf8f1ebbd9adc0d95409/2_5_1754_1053/master/1754.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=d41b50ebb44dd5d055f57f30b97708ab' imgAlt='Black Cat Face Close Up'>
          <h1>Cats!</h1>
          <p>Cats are cute. Click here to see more images of cats!</p>
        </Card>
        <Card href='https://www.google.se/search?q=dog&tbm=isch&ved=2ahUKEwiP7p__go79AhVNxrsIHa8ZADEQ2-cCegQIABAA&oq=dog&gs_lcp=CgNpbWcQAzIHCAAQsQMQQzIHCAAQsQMQQzIKCAAQsQMQgwEQQzIECAAQQzIICAAQgAQQsQMyBQgAEIAEMgQIABBDMggIABCABBCxAzIFCAAQgAQyCAgAEIAEELEDOgsIABCABBCxAxCDAToECAAQAzoICAAQsQMQgwFQqgJYpBBg3RVoAHAAeACAAUOIAfQCkgEBNpgBAKABAaoBC2d3cy13aXotaW1nsAEAwAEB&sclient=img&ei=WNTnY4_iMM2M7_UPr7OAiAM&authuser=0&bih=569&biw=1280&hl=sv' imgSrc='https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445' imgAlt='Dog'>
          <h1>Dogs!</h1>
          <p>Dogs are cute too. Click here to see more images of dogs!</p>
        </Card>
      </section>
      <section>
        <h1>Modal</h1>
        <Modal show={showModal} onClose={handleShow} size='lg'>
          <Button color='red' onClick={handleShow}>Click for Modal</Button>
          <Modal.Header test='Hej!'>
            Terms of Service
          </Modal.Header>
          <Modal.Body>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
            </p>
            <br />
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleShow}>
              I accept
            </Button>
            <Button color='grey' onClick={handleShow}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    </div>
  )
}

export default App

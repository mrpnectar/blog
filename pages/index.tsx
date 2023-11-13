import Image from 'next/image'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <div className="flex items-center">
          <Image src="/profile.jpg" alt="Profile Picture" width={50} height={50} />
          <div className="ml-4">
            <h2 className="text-xl font-bold">John Doe</h2>
            <p className="text-gray-500">Posted on January 1, 2022</p>
          </div>
        </div>
        <div className="mt-6">
          <h1 className="text-2xl font-bold mb-2">Blog Title</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet facilisis urna. Proin vitae dui erat. Morbi libero mauris, volutpat quis lacus vel, mollis ornare lectus. Proin nec arcu et libero faucibus cursus.</p>
        </div>
      </main>
    </div>
  )
}
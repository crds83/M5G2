import EditGreeting from "../components/editGreeting"
type Greeting = {
  greeting:string;
  _id: string;
}
export default async function Back() {
  const baseUrl = "http://localhost:3000"
  const response = await fetch(`${baseUrl}/api`)
  const greetings: Greeting[] = await response.json()
  return (
    <div>
      {greetings.map(greetingObj=>
        <h1 key={greetingObj._id.toString()}>
          {greetingObj.greeting}
        </h1>
      )}
    </div>
  )
}
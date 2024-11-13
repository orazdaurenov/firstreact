'use client';
import Button from "~/components/Button";

export default function HomePage() {
  return (
    <>
    <h1>Hello World</h1>
    <Button onClick={()=> console.log('Clicked')}>my button</Button>
    </>
  );
}

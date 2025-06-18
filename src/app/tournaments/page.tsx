import Container from "@/components/container"
import tournaments from "@/lib/mocks/tournaments.json"

export default function TournamentsPage() {
  return (
    <Container>
      <h1>Tournaments</h1>
      <p>Tournaments</p>
      <div>
        <ul>
          {tournaments.map((tournament) => (
            <li key={tournament.id}>{tournament.name}</li>
          ))}
        </ul>
      </div>
    </Container>
  )
}

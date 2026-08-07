import { useParams } from "react-router";

const ChallengeDay = () => {
  const { dayId } = useParams();

  return (
    <main className="min-h-screen bg-slate-50 p-5">
      <h1 className="text-3xl font-bold text-slate-900">
        Challenge Day {dayId}
      </h1>
    </main>
  );
};

export default ChallengeDay;
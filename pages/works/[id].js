import { useRouter } from "next/router";

function User() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Welcome to the work {id} page</h1>
    </div>
  );
}

export default User;

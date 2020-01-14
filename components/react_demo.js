import CodeBlock from 'components/CodeBlock';

const code = `
import { useForm } from '@statickit/react';

function MyForm() {
  const [state, handleSubmit] = useForm('newsletter');

  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" name="email" required />
      <button type="submit" disabled={state.submitting}>Notify me</button>
    </form>
  );
}
`;

export default () => (
  <CodeBlock className="language-jsx">{code.trim()}</CodeBlock>
);

export default function BmiTips({ tips }: { tips: string }) {
  return (
    <div className="bmi-tips-card">
      <p className="content" dangerouslySetInnerHTML={{ __html: tips }} />
    </div>
  );
}

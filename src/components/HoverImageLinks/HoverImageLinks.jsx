import Link from "./Link";
import github from "../../assets/Links/github.jpg";
import linkedin from "../../assets/Links/linkedin.jpg";
import twitter from "../../assets/Links/twitter.jpg";
import blog from "../../assets/Links/blog.jpg";

export const HoverImageLinks = () => {
  return (
    <section className="p-4 md:p-8 pt-10">
      <div className="mx-auto max-w-5xl">
        <Link
          heading="Linkedin"
          subheading="@themukuldharashivkar"
          imgSrc={linkedin}
          href="https://www.linkedin.com/in/themukuldharashivkar"
        />
        <Link
          heading="Github"
          subheading="@themukuldharashivkar"
          imgSrc={github}
          href="https://www.github.com/themukuldharashivkar"
        />
        <Link
          heading="Twitter"
          subheading="@themukul_99"
          imgSrc={twitter}
          href="https://www.twitter.com/themukul_99"
        />
        <Link
          heading="Blogs"
          subheading="I write blogs for fun!"
          imgSrc={blog}
          href="https://mukuldharashivkar-blog.vercel.app/"
        />
      </div>
    </section>
  );
};

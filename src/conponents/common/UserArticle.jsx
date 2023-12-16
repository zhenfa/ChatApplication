import Avatar from "./Avatar"


const UserArticle = ({ article, messageTags, isActived }) => {
	return <>
		<article className={`flex flex-row p-3 gap-4 cursor-pointer rounded-xl ${isActived && 'bg-[#615EF00F]'}`}>
			<Avatar img={article.img} />
			<section className="flex flex-col w-3/4">
				<h1 className="text-sm font-semibold">{article.title}</h1>
				<p className="text-xs text-gray-400 font-semibold mb-2 overflow-hidden whitespace-nowrap text-ellipsis">{article.subtitle}</p>
				<div className="flex flex-row w-full gap-2">
					{
						( messageTags.length !== 0 ) ?
              messageTags.map(tag => tag) : null 
					}
				</div>
			</section>
		</article>
	</>
}

export default UserArticle
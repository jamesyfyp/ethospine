"use client"
import { useState } from "react"

export default function Nav () {
	const [dialogOpen, setDialogOpen] = useState(false)
	return (
		<div className="w-full h-10 bg-slate-500">
			<div onClick={(e)=>{e.preventDefault(); setDialogOpen(!dialogOpen)}}>sign in</div>
			{
				dialogOpen ? 
					<dialog className="text-black h-20 w-20 transition-all" open>hi</dialog>
					: 
					null
			}
		</div>
	)
}
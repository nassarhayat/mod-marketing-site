import { Link } from 'react-router-dom'

function FinalCTA() {
  return (
    <section className="mb-24">
      <div className="max-w-[1350px] mx-auto">
        <div className="grid grid-cols-[1fr_500px] gap-4">
          {/* Main content - video + text */}
          <div className="bg-white/[0.08] grid grid-cols-2 rounded-xl overflow-hidden border border-white/[0.06]">
            <div className="flex">
              <video
                src="/forest-worker-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="p-6 flex flex-col justify-center">
              <h2 className="text-7xl font-semibold text-white/[0.8] mb-3 leading-tight tracking-tight">
                Return to the craft
              </h2>
              <p className="text-lg text-white/60 leading-relaxed">
                Coding agents handle the implementation. Now you can focus on what matters, the intent behind your software and the insights that shape it.
              </p>
              <p className="text-lg text-white/60 leading-relaxed mt-2">
                Mod brings teams together to collaborate on specs, context around code, and review to build production grade software.
              </p>
            </div>
          </div>

          {/* CTA card */}
          <div className="p-5 flex flex-col justify-center rounded-xl border border-white/[0.06]">
            <p className="text-5xl font-semibold text-white mb-2 leading-snug">
              Ready to become spec driven?
            </p>
            <p className="text-lg text-white/50 leading-relaxed mb-4">
              Ship faster with specs your whole team can collaborate on.
            </p>
            <div className="flex flex-col gap-3">
              <Link
                to="#"
                className="bg-white text-black text-center py-3 px-6 rounded-lg font-medium hover:bg-white/90 transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/docs"
                className="bg-transparent text-white/80 text-center py-3 px-6 rounded-lg font-medium border border-white/20 hover:bg-white/5 hover:border-white/30 hover:text-white transition-all"
              >
                Read the Docs
              </Link>
            </div>
            <div className="mt-5 pt-4 border-t border-white/[0.08]">
              <div className="flex gap-1.5 mb-2">
                <span className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-[10px] font-semibold text-white/50">S</span>
                <span className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-[10px] font-semibold text-white/50">V</span>
                <span className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-[10px] font-semibold text-white/50">O</span>
                <span className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-[10px] font-semibold text-white/50">N</span>
              </div>
              <p className="text-xs text-white/40">500+ teams collaborating via Mod</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA

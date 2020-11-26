import React, { Component } from "react"
import processCycle from "../../static/processcycle.png"
import nameStrokeSmall from "../../static/namestrokesmall.png"

class Process extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount = () => {
    window.addEventListener("scroll", this.manageCards)
  }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.manageCards)
  }

  manageCards = () => {
    let scrollPosition = window.scrollY
    let triggerHeight = document.getElementById("process-div").offsetTop
    if (scrollPosition >= triggerHeight - 130) {
      document.getElementById("img-div").classList.remove("hidden")
      document.getElementById("problem-space").classList.remove("hidden")
      document.getElementById("solution-space").classList.remove("hidden")
    } else {
      document.getElementById("img-div").classList.add("hidden")
      document.getElementById("problem-space").classList.add("hidden")
      document.getElementById("solution-space").classList.add("hidden")
    }
  }

  render() {
    let process = (
      <div id="process-div" className="row">
        <div id="process-intro" className="col-12">
          <div className="col-6">
            For me, <span>Service Design</span> is about developing experiences
            from humans to humans. Transcending technocentric and user-only
            perspectives, service design deals with{" "}
            <span>humans and beyond</span>, thinking how our solutions will
            interact and impact the lives of users, customers, service staff,
            other stakeholders, the society around them and even the
            environment. Seeing solutions as service imply in a{" "}
            <span>holistic</span> view of the design process and its
            interdisciplinary participants. Out perspective should be systemic
            and we have to embrace embiguity along the way, since every decision
            has multiple consequences, and the holistic service viewpoint is
            helpfull to manage such trade-offs. Design is fundamentally{" "}
            <span>contextual</span>, since every development is multifaceted and
            unique. It requires the mediation of different tools for distinct
            teams and objectives, constantly adapting the framework along the
            way.
          </div>
          <div className="col-6">
            This means that, in a service perspective, the{" "}
            <span>co-evolution</span> of problem and solution is key: we first
            need to identify the right problem and then seek the right solution.
            But while developing this solution our target problem is bound to
            change, gain new perspectives and nuances that will imply in new
            interpretations to our ever evolving solution. These solutions
            derive from and unfold in human <span>experiences</span>, from
            initial exploratory experience of developing the solution to the
            final experience of using it, and with that retro-feeding the
            process. Lastly, Service Design is a <span>sequential process</span>{" "}
            and has two dimensions. One is external, helping teams to deliver
            value from end-to-end to all humans and beyond, while the other is
            internal, helping development teams transversally and ensuring
            culture and practices of service design. We service designers, as
            mediators, have to trust our skills, insights and the process
            itself, because the Service Design process has in its core{" "}
            <span>making the world a better place for all</span>.
          </div>
        </div>
        <div id="process" className="col-10">
          <div id="img-div" className="col-10 hidden">
            <img src={processCycle} id="process-img" />
          </div>
          <div id="process-spaces" className="col-12">
            <div id="problem-space" className="col-6 hidden">
              <div className="process-title">Problem Space</div>
              <div className="process-body">
                In this space the team focus on iteratively maturing problems
                into an concise and clear opportuniry statement. It includes a
                constant iteration between dicovering and defining, listening to
                peoples needs, exploring opportunities, and discussing
                possibilies.
                <div className="process-phases">
                  <img src={nameStrokeSmall} alt="" />
                  <span>Discover:</span> <br />
                  includes empathizing with people, scoping opportunities of
                  improvement and exploring technical needs. This first
                  divergence is very exploratory and should incorporate past
                  design experiences, business intentions and a begginers
                  mindset.
                  <div className="process-questions">
                    <span>Main questions:</span> which are the real pains from
                    humans involved in the solution we envision? Which values
                    are they expecting to become? How is the technical
                    state-of-the-art? What are my competitors doing?
                  </div>
                  <div className="process-tools">
                    <span>Useful tools:</span> interviews, shadowing,
                    stakeholders map, desk research, 5 whys, CSD matrix.
                  </div>
                </div>
                <div className="process-phases">
                  <img src={nameStrokeSmall} alt="" />
                  <span>Define:</span> <br />
                  focuses on framing the discoveries into a plan of action,
                  including scope, timeframe, metrics and risks. While
                  converging, the team should be free to pivot and even peek at
                  solution ideas to foresee viability or feasibility obstacles.
                  <div className="process-questions">
                    <span>Main questions:</span> What is out goal? How will we
                    measure it? Which pain points will we tackle? Will we able
                    to deliver what is expected with our current tech team? Is
                    is sustainable in the long run? Which risks are we taking?
                  </div>
                  <div className="process-tools">
                    <span>Useful tools:</span> personas, empathy map, journey
                    maps, roadmap, business model canvas, how might we.
                  </div>
                </div>
              </div>
            </div>
            <div id="solution-space" className="col-6 hidden">
              <div className="process-title">Solution Space</div>
              <div className="process-body">
                Having goals and plans, the team enters this space seeking for
                means of achieving solutions that fulfill the project statement,
                with a mindset of cyclically developing services that improve
                peoples lives.
                <div className="process-phases">
                  <img src={nameStrokeSmall} alt="" />
                  <span>Develop:</span> <br />
                  aims for another divergence, now of ideas and concepts able to
                  solve the pains uncovered in the previous space. Far from
                  being a chaos, the creative process here can be organized
                  through research, facilitated ideation and early prototyping.
                  <div className="process-questions">
                    <span>Main questions:</span> where can we gather inspiration
                    to achieve insights? How are we going to deliver value? What
                    can be made to solve users pain points? Which colateral
                    effects these ideas may have on other people? How can we
                    promote a shared view among the team?
                  </div>
                  <div className="process-tools">
                    <span>Useful tools:</span> brainstorming variations,
                    roleplaying, world café, wireframing, mock-ups, low-fidelity
                    prototyping.
                  </div>
                </div>
                <div className="process-phases">
                  <img src={nameStrokeSmall} alt="" />
                  <span>Deliver:</span> <br />
                  as a latter step on an iterative process, concentrates on
                  assuring a solution consensus, matching needs and features,
                  and validating them. This can mean delivering a ready service
                  to users or hading over a product plan for a tech team to
                  build it.
                  <div className="process-questions">
                    <span>Main questions:</span> which is the best solution we
                    can come up with now? Does our solution meet all pain
                    points? Have we validated it with user? Is this solution
                    doable? Is the concept clear and documented enough to go to
                    further phases?
                  </div>
                  <div className="process-tools">
                    <span>Useful tools:</span> storyboard, service blueprint,
                    dot voting, impact effort matrix, affinity diagram, medium
                    and high-fidelity prototyping.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
    return process
  }
}
export default Process

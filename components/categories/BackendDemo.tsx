import { motion } from 'framer-motion'
import { useState } from 'react'
import Draggable from 'react-draggable'
import Xarrow from 'react-xarrows'
import sha256 from 'sha256'

export default function BackendDemo () {
  const [salt, setSalt] = useState('')

  if (!salt) setInterval(() => setSalt(saltGen(8)), 500)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [apiLog, setApiLog] = useState('')

  const [database, setDatabase] = useState([])

  function login () {
    const user = database.find((data) => data.username === username)
    if (!user) {
      setApiLog(JSON.stringify({
        success: false,
        message: 'user not exists'
      }, null, 2))
      return
    }

    if (user.hash !== sha256(user.salt + password)) {
      setApiLog(JSON.stringify({
        success: false,
        message: 'password is wrong'
      }, null, 2))
      return
    }

    setApiLog(JSON.stringify({
      success: true,
      message: 'login successfully',
      token: 'blabla'
    }, null, 2))

    setUsername('')
    setPassword('')
  }

  function regist () {
    const usedSalt = saltGen(8)

    if (database.find((data) => data.username === username)) {
      setApiLog(JSON.stringify({
        success: false,
        message: 'user aleady exists'
      }, null, 2))
      return
    }

    setDatabase([
      ...database,
      {
        username,
        hash: sha256(usedSalt + password),
        salt: usedSalt
      }
    ])

    setApiLog(JSON.stringify({
      success: true,
      message: 'user created successfully'
    }, null, 2))

    setUsername('')
    setPassword('')
  }

  function clear () {
    setDatabase([])
  }

  return (
    <div>
      <h3 className="text-left text-white">Simple Authentication Demo</h3>
      <motion.div className="flex flex-wrap justify-evenly border border-dashed" transition={{ delay: 0.3 }} initial={{ opacity: 0, rotateZ: 4 }} animate={{ opacity: 1, rotateZ: 0 }}>
        <motion.div transition={{ delay: 0.4 }} initial={{ translateY: 100, translateX: 100, opacity: 0 }} animate={{ translateY: 0, translateX: 0, opacity: 1 }}>
          <Draggable>
            <div id="form" className="m-5 p-5 relative z-20 cursor-move bg-white rounded hover:shadow-xl transition-shadow shadow-lg">
              <h4 className="font-bold text-lg mb-3">Form</h4>
              <form>
                <input onChange={(ev) => setUsername(ev.target.value)} value={username} type="text" className="w-full block border rounded shadow-sm my-1 p-2" placeholder="Username"/>
                <input onChange={(ev) => setPassword(ev.target.value)} value={password} type="password" className="w-full block border rounded shadow-sm my-1 p-2" placeholder="Password"/>
              </form>

              <button onClick={login} className="p-2 bg-green-300 rounded mt-2 mx-1 w-1/3 shadow-sm hover:shadow-md">Login</button>
              <button onClick={regist} className="p-2 bg-gray-300 rounded mt-2 mx-1 w-1/3 shadow-sm hover:shadow-md">Regist</button>
            </div>
          </Draggable>
        </motion.div>
        <motion.div transition={{ delay: 0.6 }} initial={{ translateY: 100, translateX: 100, opacity: 0 }} animate={{ translateY: 0, translateX: 0, opacity: 1 }}>
          <Draggable>
            <div id="api" className="m-5 p-5 relative z-20 cursor-move bg-white rounded hover:shadow-xl transition-shadow shadow-lg">
              <h4 className="font-bold text-lg mb-3">API</h4>
              <textarea value={apiLog} className="font-mono text-red-400 p-5 border rounded bg-white w-full shadow-sm" disabled></textarea>
            </div>
          </Draggable>
        </motion.div>
        <motion.div transition={{ delay: 0.8 }} initial={{ translateY: 100, translateX: 100, opacity: 0 }} animate={{ translateY: 0, translateX: 0, opacity: 1 }}>
          <Draggable>
            <div id="hash" className="m-5 p-5 relative z-20 cursor-move bg-white rounded hover:shadow-xl transition-shadow shadow-lg">
              <h4 className="font-bold text-lg">Hash f(x)</h4>
            </div>
          </Draggable>
        </motion.div>
        <motion.div transition={{ delay: 1.0 }} initial={{ translateY: 100, translateX: 100, opacity: 0 }} animate={{ translateY: 0, translateX: 0, opacity: 1 }}>
          <Draggable>
            <div id="salt" className="m-5 p-5 relative z-20 cursor-move bg-white rounded hover:shadow-xl transition-shadow shadow-lg">
              <h4 className="font-bold text-lg">Salt Gen</h4>
              <p className="border">{salt}</p>
            </div>
          </Draggable>
        </motion.div>
        <motion.div transition={{ delay: 1.2 }} initial={{ translateY: 100, translateX: 100, opacity: 0 }} animate={{ translateY: 0, translateX: 0, opacity: 1 }}>
          <Draggable>
            <div className="m-5 p-5 relative z-20 cursor-move bg-white rounded hover:shadow-xl transition-shadow shadow-lg" id="db">
              <h4 className="font-bold text-lg mb-3">DB</h4>
              <table className="w-full shadow rounded">
                <thead>
                  <tr>
                    <th className="border bg-gray-100 font-normal">Username</th>
                    <th className="border bg-gray-100 font-normal">Hash</th>
                    <th className="border bg-gray-100 font-normal">Salt</th>
                  </tr>
                </thead>
                <tbody>
                  {database.map((data, i) => (
                    <tr key={i}>
                      <td>{data.username}</td>
                      <td className="max-w-sm break-words">{data.hash}</td>
                      <td>{data.salt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={clear} className="p-2 bg-red-300 rounded mt-2 mx-1 shadow-sm hover:shadow-md">Clear</button>
            </div>
          </Draggable>
        </motion.div>

        <motion.div transition={{ delay: 1.4 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Xarrow lineColor="lightgreen" headColor="lightgreen" start="form" end="api"/></motion.div>
        <motion.div transition={{ delay: 1.45 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Xarrow lineColor="lightgray" headColor="lightgray" start="salt" end="hash"/></motion.div>
        <motion.div transition={{ delay: 1.5 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Xarrow lineColor="lightgray" headColor="lightgray" start="api" end="hash"/></motion.div>
        <motion.div transition={{ delay: 1.55 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Xarrow lineColor="lightgray" headColor="lightgray" startAnchor="bottom" endAnchor="right" start="hash" end="db"/></motion.div>
        <motion.div transition={{ delay: 1.6 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Xarrow lineColor="lightgray" headColor="lightgray" startAnchor="bottom" endAnchor="right" start="salt" end="db"/></motion.div>
        <motion.div transition={{ delay: 1.65 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Xarrow lineColor="lightgray" headColor="lightgray" startAnchor="bottom" endAnchor="right" start="api" end="db"/></motion.div>
        <motion.div transition={{ delay: 1.7 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}><Xarrow lineColor="pink" headColor="pink" startAnchor="top" endAnchor="bottom" start="db" end="api"/></motion.div>
      </motion.div>
    </div>
  )
}

function saltGen (length: number) {
  let str = ''
  for (let i = 0; i < length; i++) {
    str += i % 2
      ? String.fromCharCode(Math.floor(Math.random() * 106) + 21 + i)
      : String.fromCharCode(Math.floor(Math.random() * 169) + 697 + i)
  }
  return str
}

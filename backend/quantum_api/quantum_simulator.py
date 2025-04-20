from qiskit import QuantumCircuit, Aer, execute

def run_simulation(gate_list):
    qc = QuantumCircuit(1)
    for gate in gate_list:
        if gate == 'h':
            qc.h(0)
        elif gate == 'x':
            qc.x(0)
        elif gate == 'z':
            qc.z(0)
    qc.measure_all()
    simulator = Aer.get_backend('qasm_simulator')
    result = execute(qc, simulator, shots=1024).result()
    counts = result.get_counts()
    return counts

import React from 'react'

const Forum = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">Fórum</h2>
                <p className="text-center text-lg text-gray-700 mb-6">
                    Participe de discussões e tire dúvidas com a comunidade.
                </p>
                {/* Aqui você pode adicionar tópicos ou cards de discussão */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-medium text-gray-800">Dúvida sobre Cálculo</h3>
                        <p className="text-gray-600 mt-2">Como resolver essa equação diferencial?</p>
                        <a href="#" className="text-blue-500 hover:underline">Participar da discussão</a>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-medium text-gray-800">Discussão sobre História</h3>
                        <p className="text-gray-600 mt-2">O que causou a Revolução Francesa?</p>
                        <a href="#" className="text-blue-500 hover:underline">Participar da discussão</a>
                    </div>
                    {/* Adicione mais discussões conforme necessário */}
                </div>
            </div>
        </section>
    )
}

export default Forum
